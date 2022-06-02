interface ImageProps {
    readonly srcImage?: string | undefined;
    readonly alt?: string;
}

export default function Image({srcImage, alt = ""}: ImageProps) {
    const style: any = {
        maxHeight: "250px",
        backgroundImage: `url(${srcImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundColor: "transparent",
        display: "flex",
        height: "250px",
        width: "100%",
    };

    return <img style={style} alt={alt}/>;
}
