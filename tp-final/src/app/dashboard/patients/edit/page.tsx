export function Page ({ params }: { params: { edit: string } }) {
    return (
        <h1 className="text-color">{params.edit}</h1>
    );
}