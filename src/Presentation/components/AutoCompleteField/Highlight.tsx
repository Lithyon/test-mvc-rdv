interface HighlightProps {
    readonly controlId: string;
    readonly labelFormat: string;
    readonly recherche: string;
}

export default function Highlight({controlId, labelFormat, recherche}: HighlightProps) {
    const defaultHighlight = (s: string) => <strong>{s}</strong>;

    const regexRecherche = (v: string) => v.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");

    const highlightWord = (rechercheCourante: string, target: string): Array<string | JSX.Element> => {
        if (!rechercheCourante) {
            return [];
        } else if (!target) {
            return [rechercheCourante];
        } else {
            const listeDeMots: Array<string | JSX.Element> = [];
            const regexLabel = new RegExp(regexRecherche(target), "gi");

            let lastOffset = 0;

            rechercheCourante.replace(regexLabel, (motEnGras: string, offset: number) => {
                const substr = rechercheCourante.substring(lastOffset, offset - lastOffset);

                listeDeMots.push(substr, defaultHighlight(motEnGras));

                lastOffset = offset + motEnGras.length;

                return "";
            });

            listeDeMots.push(rechercheCourante.substring(lastOffset));

            return listeDeMots;
        }
    };

    return <>{highlightWord(labelFormat, recherche).map(
        (valeur, index) => valeur && <span key={`${controlId}_highlight_${index}`}>{valeur}</span>
    )}</>;
}
