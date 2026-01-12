// Server-side (Next.js example)
export default function Page() {
  return (
    <div>
      <Header /> {/* Renders immediately */}
      <Suspense fallback={<Skeleton />}>
        <SlowComponent /> {/* Streams when ready */}
      </Suspense>
      <Suspense fallback={<Skeleton />}>
        <DatabaseQuery /> {/* Streams when data arrives */}
      </Suspense>
      <Footer /> {/* Renders immediately */}
    </div>
  );
}

/*
Server receives request
    ↓
0ms: Send HTML with Header, Footer, Skeletons
    ↓ (User sees page shell immediately!)
500ms: SlowComponent ready → Stream to browser
    ↓ (Browser replaces first skeleton)
1000ms: DatabaseQuery ready → Stream to browser
    ↓ (Browser replaces second skeleton)
Done! Full page hydrated
*/
