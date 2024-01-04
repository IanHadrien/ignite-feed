/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				green: {
					green: "#00875f",
          light: "#00b37e",
				},
        black: {
          gray1: "#121214",
          gray2: "#202024",
          gray3: "#323238",
          gray4: "#7c7c8a",
        },
        gray: {
          gray5: "#8d8d99",
          gray6: "#c4c4cc",
          gray7: "#e1e1e6",
        },
				ignite: {
					gray100: "#e1e1e6",
					gray300: "#c4c4cc",
					gray400: "#8d8d99",
					gray600: "#323238",
					gray700: "#29292e",
					gray800: "#202024",
					gray900: "#121214",
				},
        red: {
          redDanger: "#f75a68",
        },
			},
			height: {
				nulo: "0vh",
				95: "95vh",
				450: "450px",
				500: "500px",
			},
			maxHeight: {
				450: "450px",
			},
			width: {
				520: "520px",
				550: "550px",
				600: "610px",
				650: "600px",
				700: "700px",
				750: "750px",
			},
			margin: {
				topNeg: "-1rem",
			},
			rotate: {
				270: "270deg",
			},
			gridTemplateRows: {
				painel: "60px 98px 27px 27px",
				painel2: "54px 124px 22px",
			},
		},
	},
	plugins: [],
}
