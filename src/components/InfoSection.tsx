const infoCards = [
  {
    icon: "🕓",
    title: "Horario de atención",
    body: (
      <ul className="text-[0.85rem] leading-relaxed text-heart-wine-soft">
        <li className="flex justify-between py-0.5">
          <span>Miércoles – Domingo</span>
          <span>1:00 pm – 7:00 pm</span>
        </li>
        <li className="flex justify-between py-0.5">
          <span>Lunes – Martes</span>
          <span>Cerrado</span>
        </li>
      </ul>
    ),
  },
];

export function InfoSection() {
  return (
    <section id="info" className="mx-auto max-w-5xl px-5 pt-16 pb-5">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-[18px]">
        {infoCards.map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-heart-wine/15 bg-heart-pink-soft p-[26px]"
          >
            <span className="mb-2.5 block text-2xl">{card.icon}</span>
            <h3 className="mb-2 text-xl text-heart-berry-dark">{card.title}</h3>
            {card.body}
          </div>
        ))}
      </div>
    </section>
  );
}
