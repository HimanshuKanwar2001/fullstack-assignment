const Card=require('../models/cards');


module.exports.getCardsDetails = async function(req, res) {
    try {
        const data = await Card.find();
        // Sending the retrieved data as a JSON response
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error retrieving cards", error);
        // Sending an error response in case something goes wrong
        return res.status(500).json({ message: 'Error retrieving cards', error });
    }
};



module.exports.createCardsDetails = async function(req, res) {
    try {
        console.log(req.body);
        const card = new Card({
            title: req.body.title,
            description: req.body.description,
            link: req.body.link,
        });
        await card.save();
        res.status(201).json({ message: 'Card created successfully', card });
    } catch (error) {
        res.status(500).json({ message: 'Error creating card', error });
    }
};


module.exports.getCardByTitle = async function(req, res) {
    try {
        const title = req.params.title;
        const card = await Card.findOne({ title: title });

        if (!card) {
            return res.status(404).json({ message: 'Card not found' });
        }

        return res.status(200).json(card);
    } catch (error) {
        console.error("Error fetching card by title", error);
        return res.status(500).json({ message: 'Error fetching card', error });
    }
};


