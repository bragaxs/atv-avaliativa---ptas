exports.getItems = (req, res) => {
    const items = [
        { id: 1, nome: "Item 1", descricao: "Descrição do Item 1" },
        { id: 2, nome: "Item 2", descrica0: "Descrição do Item 2" }
    ];
    res.json(items);
};
