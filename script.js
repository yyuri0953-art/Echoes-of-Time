/* JAVASCRIPT: CORE OBJECTS & INTERACTIVITY */

const artworkData = {
    art1: {
        title: "SPOLIARIUM",
        artist: "Juan Luna, 1884 | Oil on canvas",
        image: "Spoliariumm.jpg", 
        subject: "Spoliarium is a famous painting made in 1884. It shows fallen gladiators being dragged away after a fight in a Roman arena.",
        content: "The scene is dark and emotional, highlighting pain, defeat, and injustice through strong use of shadows and detailed expressions.",
        context: "Beyond its Roman setting, the painting is often seen as a symbol of the suffering of Filipinos during Spanish colonization. Juan Luna, a Filipino artist trained in Spain, created this masterpiece to express both artistic skill and deeper social meaning. It gained international recognition after winning a gold medal in Madrid, bringing pride to the Philippines."
    },
    art2: {
        title: "GOL AT TELON KUNEF",
        artist: "Bernard Cadaguag, 2023 | Oil on canvas",
        image: "GOL AT TELON KUNEF.jpg",
        subject: "The painting centers on the face of a woman, her gaze directed upward with a calm yet profound expression. She holds a small yellow flower in her hand, surrounded by swirling, smoke-like lines in blue and green that seem to flow around her and blend into the background. Floral elements are woven into her hair and surroundings, adding layers of cultural and natural symbolism.",
        content: "The composition draws attention to the subject's eyes and the delicate flower, creating a sense of hope, purity, and resilience. The warm colors and intricate details invite viewers to look closer and reflect on the beauty and meaning within.",
        context: "The work blends realism with surreal and expressive elements. The smooth rendering of the face contrasts with the fluid, abstract lines and textured background, giving it a dreamlike quality. It likely explores themes of identity, nature, spirituality, and the connection between humanity and the environment, reflecting deep cultural roots and inner emotion."
    },
    art3: {
        title: "NA VICTORIO EDADES",
        artist: "Danilo Santiago, 2023 | Acrylic on canvas",
        image: "NA VICTORIO EDADES.jpg",
        subject: "The painting is a close-up portrait that shows the famous National Artist Victorio Edades, in his younger years. He is dressed very formally in a textured brown suit, a neat white shirt, and a black bowtie. His signature round glasses frame a serious and calm expression, making him look very dignified. Behind him, the background is a wild mix of swirling colors like pink, orange, and yellow. These energetic, musical brushstrokes create a big contrast with the quiet and steady look of the man in the front.",
        content: "When you look at the painting, your eyes are immediately drawn to his dark glasses and his steady gaze. This focus makes Edades look like a leader with a clear vision for the future. The bright, warm colors in the background act like a glowing aura, helping the viewer feel the powerful and exciting energy he brought to the art world. By placing a calm leader at the center of this colorful storm, the artist shows how Edades stayed focused while completely changing how people think about art.",
        context: "This artwork is a mix of two styles: a realistic, traditional portrait and a messy, modern background. The artist painted Edades’ face with great detail to show his serious side as a teacher, but made the background abstract to show his side as a rebel. The swirling colors represent his title as the Father of Modern Philippine Art. They symbolize how his bright and bold ideas broke away from old, traditional ways of painting to start a new era of creative expression in the Philippines."
    },
    art4: {
        title: "HUMAN TROPHY",
        artist: "Ace Navarro, | Polymer clay, epoxy clay, mixed media on canvas",
        image: "Human trophy.jpg",
        subject: "This exhibit centers on the work Human Trophy by Ace Navarro, a powerful exploration of human fragility, violence, and the ways we are both marked and trapped by our own nature.",
        content: "I want viewers to feel both drawn in and unsettled. Through this work, I hope they come to understand how easily humanity can be objectified, and how our experiences, choices, and traumas become part of who we are, visible for all to see. Human Trophy asks us to look closely at what we value, what we destroy, and what we choose to keep as reminders of our own complexity.",
        context: "This piece was selected for its striking visual intensity and layered meaning. Using polymer clay, epoxy clay, and mixed paints on canvas, Navarro creates a surface that is at once visceral and otherworldly. The imagery—tattoos, wounds, and what appear to be embedded objects—suggests a body that has been marked, altered, and displayed, blurring the line between person and possession."
    },
   art5: {
        title: "Diwata",
        artist: "Guillermo Estrella Tolentino, 1933 | Reinforced Concrete (Recast)",
        image: "DIWATAA.jpg", 
        subject: "The sculpture features a winged female figure characterized by outstretched wings and an upward gaze. It is a recast of the celestial figure that originally stood atop the pylon of the Bonifacio Monument in Caloocan City.",
        content: "The artwork is rich in mythological and national symbolism. The term Diwata refers to a goddess or nature spirit in Philippine folklore, embodying protection, grace, and beauty. The figure’s physical pose conveys a deep connection to the divine, representing hope and the act of aspiring toward a higher purpose. Within the broader scope of the Bonifacio Monument, the figure serves as a personification of the spirit of the Filipino nation, symbolizing freedom and the awakening of the people as they rise above historical struggles.",
        context: "Created by Guillermo Estrella Tolentino, a National Artist for Sculpture, this piece reflects a mastery of the classical style. Originally crafted as a mortuary ornament for the Reyes Family Mausoleum in Malolos, Bulacan, it was later donated to the National Museum of Fine Arts. It is now a focal point of the collection, welcoming visitors as they enter the Spoliarium Hall."
    },
};

function openModal(id) {
    const data = artworkData[id];
    const modal = document.getElementById("artModal");
    const body = document.getElementById("modal-body");

    body.innerHTML = `
        <img src="${data.image}" class="modal-image"> 
        <h2 style="margin-top:0; font-family: 'Georgia', serif;">${data.title}</h2>
        <p><em>${data.artist}</em></p>
        
        <div class="analysis-box">
            <span class="label-title">Subject</span>
            <p>${data.subject}</p>
            
            <span class="label-title">Content</span>
            <p>${data.content}</p>
            
            <span class="label-title">Context</span>
            <p>${data.context}</p>
        </div>
    `;
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Prevent background scroll
}

function closeModal() {
    document.getElementById("artModal").style.display = "none";
    document.body.style.overflow = "auto";
}

// Close if user clicks outside the content box
window.onclick = function(event) {
    let modal = document.getElementById("artModal");
    if (event.target == modal) {
        closeModal();
    }
}