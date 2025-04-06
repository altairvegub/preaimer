import { MouseEventHandler } from "react"

export type ColourKey = 'blue' | 'red' | 'slate' | 'green' | 'disabled';
type ColourMap = Record<ColourKey, string>;

type ButtonProps = {
    colour: ColourKey,
    label: string,
    clickHandler: MouseEventHandler<HTMLButtonElement>,
}

function Button({ colour, label, clickHandler }: ButtonProps) {
    const colourClasses: ColourMap = {
        //red: "text-white bg-red-500 hover:bg-red-600",
        //blue: "text-white bg-blue-500 hover:bg-blue-600",
        //slate: "text-white bg-slate-500 hover:bg-slate-600",
        //green: "text-white bg-green-500 hover:bg-green-600",
        //disabled: "text-gray-500 bg-gray-400",
        red: "text-white bg-red-600",
        blue: "text-white bg-blue-600",
        slate: "text-white bg-slate-600",
        green: "text-white bg-green-600",
        disabled: "bg-gray-400",
    }

    const classes = `w-72 py-3 rounded font-semibold text-l ${colourClasses[colour]}`

    return (
        <button
            className={`${classes} z-10 fixed bottom-40`}
            onClick={clickHandler}
            disabled={colour === 'disabled'}
        >
            {label}
        </button>
    )
}

export default Button;
