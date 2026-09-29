elements.radio_cative = {
    name: "RADIO-CATIVE",

    color: "#00BFFF",

    behavior: behaviors.WALL,

    category: "energy",
    state: "solid",
    density: 19050,

    tick: function(pixel) {
        pixel.glow = true;

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

        for (let i = 0; i < directions.length; i++) {
            if (Math.random() < 0.35) {

                let x = pixel.x + directions[i][0];
                let y = pixel.y + directions[i][1];

                if (isEmpty(x, y, true)) {
                    createPixel("neutron", x, y);
                }
            }
        }
    }
};
