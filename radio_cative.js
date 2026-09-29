elements.radio_cative = {
    name: "RADIO-CATIVE",

    color: "#00BFFF",

    behavior: behaviors.WALL,

    category: "energy",
    state: "solid",
    density: 19050,

    tick: function(pixel) {

        // Strong radioactive glow
        pixel.glow = true;

        // Emit neutrons in all 8 directions
        let directions = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0],
            [1, 1],
            [-1, 1],
            [1, -1],
            [-1, -1]
        ];

        // Very high emission rate
        for (let i = 0; i < directions.length; i++) {

            if (Math.random() < 0.80) {

                let x = pixel.x + directions[i][0];
                let y = pixel.y + directions[i][1];

                if (isEmpty(x, y, true)) {
                    createPixel("neutron", x, y);
                }
            }
        }
    }
};
