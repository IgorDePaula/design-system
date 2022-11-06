import BadgetType from "@type/BadgetType";

export default function Badget(props: BadgetType) {
    const {text, variant} = props
    const variants = {
        error: 'text-red-800 bg-red-100',
        warning: 'text-yellow-800 bg-yellow-100',
        info: 'text-cyan-800 bg-cyan-100',
        success: 'text-green-800 bg-green-100'
    }
    const colorVariant = variant == null || variants[variant] == null ? variants['success'] : variants[variant]
    return <span data-testid='badget'
                 className={`inline-flex rounded-full  px-2 text-xs font-semibold leading-5 ${colorVariant}`}>
{text}
                        </span>
}
