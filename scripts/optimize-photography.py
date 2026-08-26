"""Generate responsive WebP files for the photography gallery."""

from pathlib import Path

from PIL import Image, ImageOps


SOURCE_DIR = Path("public/assets/photography/originals")
OUTPUT_DIR = Path("public/assets/photography/web")
WIDTHS = (640, 1280)


def main():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    for source in sorted(SOURCE_DIR.glob("*.jpg")):
        with Image.open(source) as opened_image:
            image = ImageOps.exif_transpose(opened_image).convert("RGB")

            for width in WIDTHS:
                target_width = min(width, image.width)
                target_height = round(image.height * target_width / image.width)
                resized = image.resize(
                    (target_width, target_height),
                    Image.Resampling.LANCZOS,
                )
                destination = OUTPUT_DIR / f"{source.stem}-{width}.webp"
                resized.save(destination, "WEBP", quality=82, method=6)
                print(f"Created {destination} ({target_width}x{target_height})")


if __name__ == "__main__":
    main()
