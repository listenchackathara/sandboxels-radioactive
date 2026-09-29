elements.radio_cative = {
    name: "RADIO-CATIVE",

    // Bright radioactive blue
    color: "#00BFFF",

    // Solid, immovable material
    behavior: behaviors.WALL,

    category: "solids",
    state: "solid",
    density: 19050,

    // Make it behave like a powerful radioactive source
    tick: function(pixel) {

        // Enable emissive/glow behavior
        pixel.glow = true;

        // Slight temperature increase
        pixel.temp += 2;

        // 8 directions around the RADIO-CATIVE pixel
        let directions = [
            [0, -1],   // up
            [0, 1],    // down
            [-1, 0],   // left
            [1, 0],    // right
            [-1, -1],  // upper-left
            [1, -1],   // upper-right
            [-1, 1],   // lower-left
            [1, 1]     // lower-right
        ];

        // Extremely strong neutron emission
        for (let i = 0; i < directions.length; i++) {

            if (Math.random() < 0.90) {

                let x = pixel.x + directions[i][0];
                let y = pixel.y + directions[i][1];

                if (isEmpty(x, y, true)) {
                    createPixel("neutron", x, y);
                }
            }
        }

        // Occasional extra neutron burst
        if (Math.random() < 0.25) {

            for (let i = 0; i < directions.length; i++) {

                let x = pixel.x + directions[i][0];
                let y = pixel.y + directions[i][1];

                if (isEmpty(x, y, true)) {
                    createPixel("neutron", x, y);
                }
            }
        }
    }
};
