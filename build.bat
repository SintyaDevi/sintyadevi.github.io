@echo off

echo "=== Remove assets file ==="
if exist "assets" (
    echo "folder assets ditemukan"
    echo "Menghapus folder..."
    rmdir /S /Q assets
    echo "Selesai."
) else (
    echo "Folder assets tidak ada"
)

echo "=== Remove dist folder ==="
if exist "dist" (
    echo "folder dist ditemukan"
    echo "Menghapus folder..."
    rmdir /S /Q dist
    echo "Selesai."
) else (
    echo "Folder dist Tidak ada"
)

xcopy index_ori.html index.html /y /i /s

call npm run build
echo "Done build..."

if not exist "docs" (
    echo "Membuat docs"
    mkdir docs
)

if exist "dist" (
    echo "Copy from dist to workdir"
    @REM /i untuk confirmasi
    @REM /y untuk overwrite
    @REM /s untuk subfolder
    @REM xcopy .\dist .\docs\ /y /i /s
    xcopy .\dist .\ /y /i /s
) else (
    echo "Build failed, "
)

echo "menghapus folder dist..."
rmdir .\dist /Q /S
echo "Done."