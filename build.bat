@echo off

echo "=== Remove assets file ==="
if exist "assets/" (
    echo "folder assets ditemukan"
    echo "Menghapus folder..."
    rmdir /S /Q assets/
    echo "Selesai."
) else (
    echo "Folder assets tidak ada"
)

echo "=== Remove dist folder ==="
if exist "dist/" (
    echo "folder dist ditemukan"
    echo "Menghapus folder..."
    rmdir /S /Q dist/
    echo "Selesai."
) else (
    echo "Folder dist Tidak ada"
)

echo "Builing new app..."
call npm run build
echo "Done build..."

echo "Copy from dist to workdir"
copy dist/ .
