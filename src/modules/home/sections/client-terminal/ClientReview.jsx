function ClientReview({ description, name, role, avatar }) {
  return (
    <div className="bg-white border-2 rounded-xl p-6 text-center">
      <img
        src={avatar}
        alt={name}
        className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
      />

      <p className="text-gray-600 text-sm mb-4">
        {description}
      </p>

      <h4 className="text-lg font-bold text-blue-950">{name}</h4>
      <span className="text-sm text-gray-500">{role}</span> <br />
      <span>⭐⭐⭐⭐⭐</span>
    </div>
  );
}

export default ClientReview;
