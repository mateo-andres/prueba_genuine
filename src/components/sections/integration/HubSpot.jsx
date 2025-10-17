import { useEffect, useState } from "react";
import { FaRegEye, FaRegHeart, FaRegComment, FaRegShareSquare } from "react-icons/fa";

export default function HubSpot() {
  const [leads, setLeads] = useState([]);
  const [posts, setPosts] = useState([]);
  const fetchRecentLeads = async () => {
    const response = await fetch(`https://dummyjson.com/users?limit=5`);
    const data = await response.json();
    setLeads(data.users);
  };

  const fetchRecentPosts = async () => {
    const response = await fetch(`https://dummyjson.com/posts?limit=2`);
    const data = await response.json();
    setPosts(data.posts);
  };

  useEffect(() => {
    fetchRecentLeads();
    fetchRecentPosts();
  }, []);

  const StatCard = ({ value, label, bgColor, icon }) => {
    return (
      <div className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg" title={label}>
        <div className={`w-10 h-10 ${bgColor} rounded-full flex items-center justify-center`}>{icon}</div>
        <div>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          <p className="hidden lg:block text-sm text-gray-500">{label}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mt-8 flex flex-col gap-8">
      <h2 className="text-2xl font-bold text-blue-900">Integración con HubSpot</h2>
      <div className="border border-gray-200 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-blue-900">Últimos leads registrados</h2>
        <section className="grid gap-4">
          {leads.map((lead) => (
            <article key={lead.id} className="flex flex-col md:flex-row items-start md:items-center gap-4 border-b border-gray-200 pb-2">
              <figure>
                <img className="w-14 rounded-full" src={lead.image} alt={`${lead.firstName} ${lead.lastName}`} />
              </figure>
              <div className="gap-2 w-full">
                <h2 className="text-lg font-bold">
                  {lead.firstName} {lead.lastName}
                </h2>
                <div className="grid lg:grid-cols-3  md:gap-4 gap-1">
                  <p className="text-sm text-gray-500">{lead.email}</p>
                  <p className="text-sm text-gray-500">{lead.phone}</p>
                  <p className="text-sm text-gray-500">{lead.company.name}</p>
                </div>
              </div>
              <h3 className="font-bold self-end">${lead.height}</h3>
            </article>
          ))}
        </section>
      </div>

      <div className="border border-gray-200 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-blue-900">Estadísticas últimos posts</h2>
        <section className="grid gap-6">
          {posts.map((post) => (
            <article key={post.id} className="border-b border-gray-200 pb-6">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{post.title}</h3>
                <p className="text-sm text-gray-500">Publicado hace {Math.floor(Math.random() * 7) + 1} días</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <StatCard
                  value={post.views}
                  label="Vistas"
                  iconColor="text-blue-600"
                  bgColor="bg-blue-50"
                  icon={<FaRegEye className={`w-5 h-5 text-blue-600`} />}
                />
                <StatCard
                  value={post.reactions.likes}
                  label="Me gusta"
                  iconColor="text-red-600"
                  bgColor="bg-red-50"
                  icon={<FaRegHeart className={`w-5 h-5 text-red-600`} />}
                />
                <StatCard
                  value={post.reactions.dislikes}
                  label="Comentarios"
                  iconColor="text-green-600"
                  bgColor="bg-green-50"
                  icon={<FaRegComment className={`w-5 h-5 text-green-600`} />}
                />
                <StatCard
                  value={Math.floor(Math.random() * 200) + 20}
                  label="Compartidos"
                  iconColor="text-purple-600"
                  bgColor="bg-purple-50"
                  icon={<FaRegShareSquare className={`w-5 h-5 text-purple-600`} />}
                />
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}
