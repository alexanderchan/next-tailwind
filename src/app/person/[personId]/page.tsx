export default function Page(props: any) {
  return (
    <div>
      what's the id? <pre>{JSON.stringify({ props })}</pre>
    </div>
  )
}
