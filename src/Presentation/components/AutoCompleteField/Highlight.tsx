interface HighlightProps {
    readonly labelFormat: string;
    readonly recherche: string;
}

export default function Highlight({ labelFormat, recherche }: HighlightProps) {
    const defaultHighlight = (s: string) => <strong>{s}</strong>;

    const regexRecherche = (v: string) => v.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");

    const highlightWord = (source: string, target: string) => {
        const res: any[] = [];

        if (!source) {
            return res;
        }

        if (!target) {
            return source
        }

        const regexLabel = new RegExp(regexRecherche(target), "gi");

        let lastOffset = 0;

        source.replace(regexLabel, (val, offset: number) => {
            const substr = source.substring(lastOffset, offset - lastOffset);

            res.push(substr, defaultHighlight(val));

            lastOffset = offset + val.length;

            return "";
        });

        res.push(source.substring(lastOffset));

        return res;
    }

    return <>{highlightWord(labelFormat, recherche)}</>;
}
