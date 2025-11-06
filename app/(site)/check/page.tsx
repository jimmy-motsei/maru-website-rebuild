import Image from "next/image";

export default function Check() {
  return (
    <main className="py-16">
      <h1 className="text-3xl font-bold">Asset check</h1>
      <p className="mt-2 opacity-70">If you see an image below, assets & routing are good.</p>
      <div className="mt-6">
        <Image
          src="/images/partners/heb_bw_logo.png"  // swap to any real file under /public/images
          alt="Sanity check"
          width={800}
          height={400}
          className="rounded-xl"
          priority
        />
      </div>
    </main>
  );
}
