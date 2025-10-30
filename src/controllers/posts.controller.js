let publicaciones = [
    {id: 1, title: 'Primer Post', content: 'Este es el contenido del primer post'},
    {id: 2, title: 'Segundo Post', content: 'Este es el contenido del segundo post'},
    {id: 3, title: 'Tercer Post', content: 'Este es el contenido del tercer post'}
];

export const getPosts = (req, res) => {
    res.json({
        status: 'success',
        message: 'Lista de publicaciones obtenida correctamente',
        data: publicaciones
    });
};

export const createPost = (req, res) => {
    const body = req.body;

    const nuevaPublicacion = {
        id: publicaciones.length + 1,
        title: body.title,
        content: body.content
    };

    publicaciones.push(nuevaPublicacion);
    res.status(201).json(nuevaPublicacion);
}

export const updatePost = (req, res) => {
    const { id } = req.params;
    
    const publicacion = publicaciones.find(publicacion => publicacion.id === parseInt(id));

    const { title, content } = req.body;

    publicacion.title = title;
    publicacion.content = content;

    res.status(200).json(publicacion);
}

export const deletePost = (req, res) => {
    const { id } = req.params;

    const publicacionIndex = publicaciones.findIndex(publicacion => publicacion.id === parseInt(id));
    publicaciones.splice(publicacionIndex, 1);

    res.status(200).json({ message: "Publicación eliminada correctamente" });
}