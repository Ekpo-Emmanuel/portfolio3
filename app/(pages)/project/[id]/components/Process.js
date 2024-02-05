export default function Process({ process }) {
  return (
    process.length > 0 && (
      <div className='process'>
        <div dangerouslySetInnerHTML={{ __html: process }} />
      </div>
    )
  );
}
