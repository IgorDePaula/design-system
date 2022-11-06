import LabelType from "@type/LabelType";

export default function Label(props: LabelType) {
    const { id, children } = props
    return (
        <label
            data-testid='label'
            htmlFor={id}
            className="mb-3 block text-sm font-medium text-gray-700"
        >
            {children}
        </label>
    )
}
