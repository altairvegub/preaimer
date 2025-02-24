import { MouseEventHandler } from "react"

type ColourKey = "blue" | "red" | "grey";
type ColourMap = Record<ColourKey, string>;

type ButtonProps = {
    colour: ColourKey,
    label: string,
    clickHandler: MouseEventHandler<HTMLButtonElement>,
}

function Button({ colour, label, clickHandler }: ButtonProps) {
    const colourClasses: ColourMap = {
        red: "bg-red-500 hover:bg-red-600",
        blue: "bg-blue-500 hover:bg-blue-600",
        grey: "bg-slate-500 hover: bg-slate-600"
    }

    const classes = `w-72 px-5 py-3 text-white rounded ${colourClasses[colour]}`

    return (
        <button
            className={`${classes}`}
            onClick={clickHandler}
            style={{
                zIndex: 2,
                position: 'fixed',
                bottom: '10rem',
                left: '50%',
                transform: 'translateX(-50%)',
            }}
        >
            {label}
        </button>
    )
}

export default Button;
