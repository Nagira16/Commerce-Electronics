import prisma from "@/utils/prisma/prisma";

const main = async () => {
  await prisma.product.createMany({
    data: [
      {
        name: "Macintosh",
        category: "Desktop Computers",
        price: 2000,
        description:
          "the first successful mass-market all-in-one desktop personal computer with a graphical user interface, built-in screen, and mouse. Operating system  System Software 1.0 CPU Motorola 68000 @ 7.8336 MHz (6 MHz effectively) Memory  128 KB RAM Removable storage  3+1⁄2 inch floppy disk Display  9 in (23 cm) monochrome, 512 × 342 Dimensions Height: 13.6 in (35 cm) Width: 9.6 in (24 cm) Depth: 10.9 in (28 cm) Mass 16.5 lb (7.5 kg) Predecessor Lisa Successor Macintosh 512K Related  Apple IIe Apple IIc",
        stock: 50,
        imageUrl: "/images/products/Micintosh.jpg",
        color: "Original",
        company: "Apple",
      },
      {
        name: "iMac G3",
        category: "Desktop Computers",
        price: 1500,
        description:
          "Memory Two SO-DIMM slots: 32–256 MB PC100 SDRAM Graphics ATI Rage IIc with 2 MB of SGRAM ATI Rage Pro Turbo with 6 MB of SGRAM Hard drive 4 GB 6 GB Optical drive Tray-loading 24× CD-ROM Connectivity 10/100 BASE-T Ethernet 56k modem 4 Mbit/s IrDA  — Peripherals 2× USB Audio input/output jacks Built-in stereo speakers Original Operating system  Mac OS 8.1 (initial release) or Mac OS 8.5  Mac OS 8.5.1 Weight 40 lb (17.25 kg) Dimensions 15.8 × 15.2 × 17.6-inch (40.1 × 38.6 × 44.7 cm)",
        stock: 20,
        imageUrl: "/images/products/iMac_G3.webp",
        color: "Blue",
        company: "Apple",
      },
      {
        name: "iPod 2001",
        category: "iPod",
        price: 1000,
        description:
          "iPod (Scroll Wheel) models have a scroll wheel that physically turns. The controls (Play, Menu, Next, Previous) are in a circle around the wheel. iPod (Scroll Wheel) models are referred to as first-generation iPod models. Capacity: 5 and 10 GB Navigation: Scroll Wheel",
        stock: 10,
        imageUrl: "/images/products/iPod_2001.webp",
        color: "Original",
        company: "Apple",
      },
      {
        name: "MacBook (13-inch, Late 2006)",
        category: "Laptop Computers",
        price: 500,
        description:
          "Display: 13.3-inch glossy display with a resolution of 1280 x 800 pixels. Processor: Offered with either an Intel Core Duo or Core 2 Duo processor. Memory: Came with 512MB or 1GB of RAM, expandable up to 2GB. Storage: Options for a 60GB or 80GB hard drive, with a higher option of 120GB available. Graphics: Integrated Intel GMA 950 graphics processor. Connectivity: Featured USB 2.0 ports, a FireWire 400 port, an Ethernet port, and an SD card slot (optional). Operating System: Initially shipped with Mac OS X 10.4 Tiger, upgradeable to newer versions. Battery Life: Up to 6 hours of battery life.",
        stock: 10,
        imageUrl: "/images/products/MacBook_2006.jpg",
        color: "Black",
        company: "Apple",
      },
      {
        name: "MacBook Air (1st Generation, 2008)",
        category: "Laptop Computers",
        price: 400,
        description:
          "Display: 13.3-inch LED-backlit display with a resolution of 1280 x 800 pixels. Processor: Offered with Intel Core 2 Duo processors (1.6 GHz or 1.8 GHz options). Memory: Initially came with 2GB of RAM, upgradeable to 4GB. Storage: Options for 80GB hard drive or a 64GB solid-state drive (SSD). Graphics: Integrated Intel GMA X3100 graphics processor. Operating System: Shipped with Mac OS X 10.5 Leopard, upgradeable to later versions. Battery Life: Claimed battery life of up to 5 hours on a single charge.",
        stock: 50,
        imageUrl: "/images/products/MacBookAir_2008.jpg",
        color: "Original",
        company: "Apple",
      },
      {
        name: "Commodore 64",
        category: "Home Computers",
        price: 600,
        description:
          "released in 1982, Architecture: The Commodore 64 featured an 8-bit CPU (MOS Technology 6510) and 64KB of RAM, which was quite advanced for its time. Graphics and Sound: It boasted the VIC-II graphics chip, enabling 16 colors and hardware sprites, along with the SID sound chip, which produced high-quality audio that many still regard as revolutionary for its era. Storage: Users typically loaded software from floppy disks (using the Commodore 1541 disk drive) or from cassette tapes (using the Datasette).",
        stock: 10,
        imageUrl: "/images/products/Commodore_64.jpg",
        color: "Original",
        company: "Commodore International",
      },
      {
        name: "IBM Model 5150",
        category: "Desktop Computers",
        price: 2000,
        description:
          "Processor: 4.77 MHz Intel 8088 Memory: 16 or 64 KB Keyboard: Wired, IBM Model F 83-key with five-pin connector Floppy drives: Two 5.25-inch internal drives Screen: 11.5-inch CRT with one-color (green) text Storage: 160 KB 5.25-inch floppy disk Sound: Single programmable-frequency square wave with built-in speaker Other features: Tape drive interface, optional monochrome or CGA color graphics",
        stock: 35,
        imageUrl: "/images/products/IBM_model_5150.jpg",
        color: "Original",
        company: "IBM",
      },
      {
        name: "Sharp X68000",
        category: "Desktop Computers",
        price: 1500,
        description:
          "Processor: Motorola 68000 (16 MHz) RAM: 512 KB (expandable to 8 MB) Storage: 3.5-inch floppy disk drive (double-sided, 2DD) Optional hard disk drives were available (up to 20 MB) Graphics: Resolution: High-resolution mode: 1024 x 1024 pixels (with 16 colors) Low-resolution mode: 640 x 400 pixels (with 256 colors) Graphics hardware: Custom graphics chip that allowed for advanced 2D graphics and sprite capabilities Sound: 16-bit PCM sound with a maximum of 8 simultaneous channels Yamaha YM2151 FM sound synthesis chip Display: 15 kHz RGB output (supports CGA/EGA and higher resolution) Standard 15-inch color monitor (or compatible RGB monitor) I/O Ports: Parallel port Serial port MIDI port (for music synthesis) Expansion slots for additional hardware",
        stock: 10,
        imageUrl: "/images/products/Sharp_x680000.webp",
        color: "White",
        company: "Sharp",
      },
      {
        name: "Apple PowerBook 100",
        category: "Laptop Computers",
        price: 1600,
        description:
          "Processor: Motorola 68030 Clock Speed: 25 MHz RAM: Standard: 2 MB Expandable to: 8 MB Storage: 2.5-inch hard drive (varied in capacity, commonly 80 MB to 160 MB) 3.5-inch floppy disk drive (1.44 MB) Display: 9.8-inch active matrix color LCD Resolution: 640 x 480 pixels (with support for 256 colors) Graphics: Built-in graphics controller capable of displaying up to 256 colors from a palette of 16.8 million colors. Ports: 1 x ADB (Apple Desktop Bus) port 1 x Serial port 1 x SCSI port 1 x VGA output for external monitors Battery: Built-in rechargeable battery, providing approximately 4 to 6 hours of usage on a full charge. Weight: Approximately 4.9 pounds (2.2 kg), making it relatively lightweight for its time. Keyboard: Full-size keyboard with a layout similar to desktop Macintosh computers. Trackball: Integrated trackball instead of a traditional touchpad, which was innovative at the time. Build Quality: Compact and portable design, with a plastic casing that was durable for everyday use. Operating System: Initially shipped with System 7 (Mac OS), which introduced multitasking and virtual memory.",
        stock: 0,
        imageUrl: "/images/products/Apple_powerBook_100.jpg",
        color: "Black",
        company: "Apple",
      },
    ],
  });
};

main()
  .then(() => console.log("seeds init successfully"))
  .catch((error) => console.error(error, "seeds init failed"));
