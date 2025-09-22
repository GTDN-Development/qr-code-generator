type GoogleMapProps = React.ComponentProps<"iframe"> & {
  address: string;
  width?: string | number;
  height?: string | number;
  zoom?: number;
  className?: string;
  title?: string;
};

export function GoogleMap({
  address,
  width = "100%",
  height = "400px",
  zoom = 15,
  title = "Google Maps",
  ...props
}: GoogleMapProps) {
  const encodedAddress = encodeURIComponent(address);
  const mapUrl = `https://www.google.com/maps?q=${encodedAddress}&z=${zoom}&output=embed`;

  return (
    <iframe
      {...props}
      src={mapUrl}
      width={width}
      height={height}
      title={title}
      style={{ border: 0, ...props.style }}
      loading={props.loading || "lazy"}
      referrerPolicy={props.referrerPolicy || "no-referrer-when-downgrade"}
    />
  );
}
