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
        //red: "text-primary-gray bg-red-500 hover:bg-red-600",
        //blue: "text-primary-gray bg-blue-500 hover:bg-blue-600",
        //slate: "text-primary-gray bg-slate-500 hover:bg-slate-600",
        //green: "text-primary-gray bg-green-500 hover:bg-green-600",
        //disabled: "text-gray-500 bg-gray-400",
        red: "text-primary-gray bg-red-600",
        blue: "text-primary-gray bg-blue-600",
        slate: "text-primary-gray bg-slate-600",
        green: "text-primary-gray bg-green-600",
        disabled: "text-gray-500 bg-gray-400",
    }

    const classes = `w-72 py-3 rounded-xl font-semibold text-l ${colourClasses[colour]}`

    return (
        <button
            className={`${classes} fixed z-20 bottom-40 pb-[calc(1rem_+_env(safe-area-inset-bottom))]`}
            onClick={clickHandler}
            disabled={colour === 'disabled'}
        >
            {label}
        </button>
    )
}

export default Button;
