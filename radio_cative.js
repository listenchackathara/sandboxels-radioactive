elements.radio_cative = {
    name: "RADIO-CATIVE",

    // Bright radioactive blue
    color: "#00BFFF",

    // POWDER: falls and piles like sand
    behavior: behaviors.POWDER,

    category: "powders",
    state: "solid",
    density: 19050,

    // Strong visual glow
    glow: true,

    // RADIOACTIVE HEAT
    temp: 300,

    // EXTREMELY FLAMMABLE
    burn: 100,

    // Burns for a long time
    burnTime: 150,

    // Becomes radioactive ash after burning
    burnInto: "ash",

    // Blue-white radioactive flame
    fireColor: "#00BFFF",

    // Neutron radiation
    tick: function(pixel) {

        // Keep radioactive glow active
        pixel.glow = true;

        // Slowly heat the material
        pixel.temp += 1;

        // 8 surrounding directions
        let directions = [
            [0, -1],
            [0, 1],
            [-1, 0],
            [1, 0],
            [-1, -1],
            [1, -1],
            [-1, 1],
            [1, 1]
        ];

        // VERY HIGH neutron emission
        for (let i = 0; i < directions.length; i++) {

            if (Math.random() < 0.90) {

                let x = pixel.x + directions[i][0];
                let y = pixel.y + directions[i][1];

                if (isEmpty(x, y, true)) {
                    createPixel("neutron", x, y);
                }
            }
        }

        // Additional radiation burst
        if (Math.random() < 0.30) {

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
