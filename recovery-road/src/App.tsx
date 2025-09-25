export default function RecoveryRoad() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdfaf3] px-6 py-12 font-sans">
      <div className="max-w-lg w-full mx-auto flex flex-col items-center text-center font-sans">
        {/* Title */}
        <h1 className="text-4xl font-bold text-green-900 mb-2 tracking-tight font-sans">
          Recovery Road
        </h1>
        <h2 className="text-2xl font-semibold text-green-900 mb-6 tracking-tight font-sans">
          with Jimmy
        </h2>

        {/* Subtitle */}
        <p className="uppercase tracking-wide text-green-700 font-medium mb-8 font-sans">
          Recovery Coaching – Huron County
        </p>

        {/* Services */}
        <div className="mb-8">
          <h3 className="font-semibold text-green-900 mb-3 text-lg font-sans">
            Services I Offer:
          </h3>
          <ul className="space-y-2 text-green-800 list-disc list-inside font-sans">
            <li>Personalized recovery coaching</li>
            <li>Peer support from lived experience</li>
            <li>Goal setting &amp; accountability</li>
            <li>Ongoing encouragement and guidance</li>
          </ul>
        </div>

        {/* Location */}
        <p className="font-semibold text-green-900 mb-4 font-sans">
          Serving Goderich, Ontario
        </p>

        {/* Contact */}
        <div className="space-y-2 text-green-800 mb-10">
          <p className="flex items-center justify-center gap-2 font-sans">
            <span className="text-green-700">phone</span>
            518-525-5537
          </p>
          <p className="flex items-center justify-center gap-2 font-sans">
            <span className="text-green-700">email</span>
            biss51@eastlink.ca
          </p>
        </div>

        {/* Quote */}
        <p className="italic text-green-900 text-lg border-t border-green-200 pt-6 font-sans">
          “You don’t have to do it alone.”
        </p>
      </div>
  </div>
  );
}
