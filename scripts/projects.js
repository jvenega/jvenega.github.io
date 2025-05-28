fetch('json/projects.json')
  .then(res => res.json())
  .then(data => {
    const contenedor = document.getElementById("proyectos");

    data.forEach(proyecto => {
      const card = document.createElement("div");
      card.className = "bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition duration-300";

      card.innerHTML = `
        <img src="${proyecto.image}" alt="${proyecto.title}" class="w-full h-48 object-cover" />
        <div class="p-6">
          <h3 class="text-xl font-semibold text-gray-800">${proyecto.title}</h3>
          <p class="text-sm text-gray-600 mt-2">${proyecto.description}</p>
          <div class="mt-4 flex gap-3">
            <a href="${proyecto.demo}" target="_blank" class="text-blue-600 hover:underline text-sm">🔗 Ver demo</a>
            <a href="${proyecto.repo}" target="_blank" class="text-blue-600 hover:underline text-sm">📁 Repositorio</a>
          </div>
        </div>
      `;

      contenedor.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Error al cargar los proyectos:", error);
  });
