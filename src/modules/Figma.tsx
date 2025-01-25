function Figma() {
  return (
    <div style={{ maxWidth: '100%', overflow: 'hidden' }}>
      <iframe
        style={{
          border: '1px solid rgba(0, 0, 0, 0.1)',
          width: '90vw',
          height: '80vh',
        }}
        src="https://embed.figma.com/proto/di7Xqh5kD3c7rEYhXYO9bZ/Blendify?node-id=1-6&p=f&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A6&embed-host=share"
        allowFullScreen
        title="Figma Embed"
      ></iframe>
    </div>
  );
}

export default Figma;
