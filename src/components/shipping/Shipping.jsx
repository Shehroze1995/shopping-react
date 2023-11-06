const Shipping = () => {
  return (
    <section className="bg-[#222222] text-sm text-white px-4 py-2 flex items-center justify-between max-[800px]:px-2">
      <p className="animate-pulse">
        Free shipping for standard order over $100
      </p>
      <button className="max-[800px]:hidden" type="button">Help & FAQs</button>
    </section>
  );
};

export default Shipping;
