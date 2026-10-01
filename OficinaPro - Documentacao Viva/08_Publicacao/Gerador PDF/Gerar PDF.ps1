param(
  [string]$Documento = "",
  [string]$Saida = ""
)

$ErrorActionPreference = "Stop"
$gerador = Split-Path -Parent $MyInvocation.MyCommand.Path
$vault = (Resolve-Path (Join-Path $gerador "..\..")).Path

if ([string]::IsNullOrWhiteSpace($Documento)) {
  $Documento = Join-Path $vault "08_Publicacao\Caderno do Projeto Integrador - SISMAT.md"
}

if ([string]::IsNullOrWhiteSpace($Saida)) {
  $linhaVersao = Get-Content -LiteralPath $Documento | Where-Object { $_ -match '^\s*versao\s*:' } | Select-Object -First 1
  if (-not $linhaVersao) {
    throw "O frontmatter do documento não contém o campo 'versao'."
  }

  $versao = (($linhaVersao -split ':', 2)[1]).Trim().Trim('"').Trim("'")
  $versaoSegura = $versao -replace '[^0-9A-Za-z._-]', '-'
  $Saida = Join-Path $vault "output\pdf\SISMAT-Projeto-Integrador-v$versaoSegura.pdf"
}

$nodeCommand = Get-Command node -ErrorAction SilentlyContinue
if ($nodeCommand) {
  $node = $nodeCommand.Source
} else {
  $node = Join-Path $env:USERPROFILE ".cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
}

if (-not (Test-Path -LiteralPath $node)) {
  throw "Node.js não foi encontrado. Instale Node.js 20 ou superior para executar o gerador."
}

$localModules = Join-Path $gerador "node_modules"
$codexModules = Join-Path $env:USERPROFILE ".cache\codex-runtimes\codex-primary-runtime\dependencies\node\node_modules"

if (Test-Path -LiteralPath (Join-Path $localModules "playwright")) {
  $env:SISMAT_NODE_MODULES = $localModules
} elseif (Test-Path -LiteralPath (Join-Path $codexModules "playwright")) {
  $env:SISMAT_NODE_MODULES = $codexModules
} else {
  throw "Playwright não foi encontrado. Na pasta do gerador, execute: npm install playwright; npx playwright install chromium"
}

& $node (Join-Path $gerador "gerar-pdf.mjs") --vault $vault --source $Documento --output $Saida
if ($LASTEXITCODE -ne 0) {
  throw "A geração do PDF falhou com código $LASTEXITCODE."
}

Write-Host "Concluído: $Saida"
