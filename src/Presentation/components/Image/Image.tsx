interface ImageProps {
  readonly srcImage?: string | undefined;
}

export default function Image({ srcImage }: ImageProps) {
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

  return <div style={style} />;
}
