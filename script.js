document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('loginPopup').style.display = 'none';
  document.getElementById('mainContent').style.display = 'block';
  loadPlaces(0, 4);
});

const places = [
  {
    name: "Taj Mahal",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Taj-Mahal.jpg/800px-Taj-Mahal.jpg",
    desc: "An iconic symbol of love in Agra, India.",
    map: "https://www.google.com/maps?q=27.1751,78.0421" 
  },

  {
    name: "Great Wall of China",
    image: "https://cdn.britannica.com/54/122154-050-4DA0F697/Great-Wall-of-China.jpg",
    desc: "Ancient fortification built to protect Chinese territories.",
    map: "https://www.google.com/maps?q=40.4319,116.5704"
  },
  {
    name: "Charminar",
    image: "https://tse4.mm.bing.net/th/id/OIP.DlpJeUctLL7JL2-uvULF3QHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    desc: "Famous monument in Hyderabad, Telangana.",
    map: "https://www.google.com/maps?q=17.3616,78.4747"
  },
  {
    name: "Statue of Liberty",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Statue_of_Liberty_7.jpg/800px-Statue_of_Liberty_7.jpg",
    desc: "A symbol of freedom in New York Harbor.",
    map: "https://www.google.com/maps?q=40.6892,-74.0445"
  },
  {
    name: "Niagara Falls",
    image: "https://tse4.mm.bing.net/th/id/OIP.KXFyCp_-IS9Zc2aJv30YYQHaE-?w=2100&h=1410&rs=1&pid=ImgDetMain&o=7&rm=3",
    desc: "Powerful waterfalls on the US-Canada border.",
    map: "https://www.google.com/maps?q=43.0962,-79.0377"
  },
  {
    name: "Mysore Palace",
    image: "https://photographylife.com/wp-content/uploads/2015/07/DP2M0153c.jpg",
    desc: "A majestic palace in Mysore, Karnataka.",
    map: "https://www.google.com/maps?q=12.3052,76.6552"
  },
  {
    name: "Tea Gardens",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/95/2c/a0/tea-gardens.jpg?w=1400&h=800&s=1",
    desc: "Munnar is a super scenic travel destination with tea gardens adorning well maintained roads and beautiful waterfalls",
    map: "https://www.google.com/maps?q=10.057946329579107, 77.06618858393506"
  },

 {
    name: "Andaman and Nicobar Islands",
    image: "https://natureworldwide.in/wp-content/uploads/2024/02/amazing-2451315_640-2.jpg",
    desc: "For those seeking pristine beaches and vibrant coral reefs, the Andaman and Nicobar Islands are a tropical paradise",
    map: "https://www.google.com/maps?q=8.800375, 95.624674"
  },
  {
    name: "Dong Valley-First sunrize in India",
    image: "https://surojitpalmal.com/wp-content/uploads/2023/10/First-Sunrise-in-India.webp",
    desc: "The sunrise is first seen in India in the small town of Dong in the Anjaw district of the state Arunachal Pradesh.",
    map: "https://www.google.com/maps?q=22.800000, 83.000000"
  },
  {
    name: "Darjeeling ",
    image: "https://www.worldatlas.com/upload/1d/a0/80/shutterstock-1349341919.jpg",
    desc: "Darjeeling is a city in the northernmost region of the Indian state of West Bengal. Located in the Eastern Himalayas, it has an average elevation of 2,045 metres (6,709 ft). ",
    map: "https://www.google.com/maps?q=27.038737, 88.264565"
  },
  {
    name: "Dudhsagar Waterfall",
    image: "https://1.bp.blogspot.com/-rthu-9NkAmo/XdoUgq8-xiI/AAAAAAAADmQ/dNumS1EGI90KyZ7k4xtSZ5FsSgs5vV0XwCNcBGAsYHQ/s1600/dudhsagar%2Bwaterfall.jpg",
    desc: "Dudhsagar Waterfalls is one of India’s tallest and most breathtaking waterfalls, located in Goa’s Bhagwan Mahavir Wildlife Sanctuary.",
    map: "https://www.google.com/maps?q=15.314418, 74.314316"
  },
  {
    name: "Spiti valley",
    image: "https://www.tusktravel.com/blog/wp-content/uploads/2022/04/Things-to-do-in-Spiti-Valley-Himachal-Pradesh.jpg",
    desc: "Explore the stunning landscapes, monasteries, and lakes of Spiti Valley, a cold desert in Himachal Pradesh.",
    map: "https://www.google.com/maps?q=32.246940, 78.052220"
  },
  {
    name: "Valley of Flowers",
    image: "https://images.prismic.io/indiahike/226b9030-85aa-4032-a0a0-1562d697ff53_ValleyOfFlowers+-+Pavan+Jain+-+Blooming+flowers+of+the+valley.jpg?auto=compress,format",
    desc: "With a stunning backdrop of the mighty Himalayan ranges, the Valley of Flowers National Park presents an ethereal view and an unforgettable experience for visitors",
    map: "https://www.google.com/maps?q=30.553730, 79.563606"
  },
  {
    name: "Goa Beach",
    image: "https://www.agoda.com/wp-content/uploads/2023/02/North-goa-beaches-things-to-do-in-goa.jpg",
    desc: "visitors will find an abundance of sandy stretches to explore, fringed by coconut palms, and dotted with shacks and water-sports activities.",
    map: "https://www.google.com/maps?q="
  },
  {
    name: "Mount Everest",
    image: "https://t3.ftcdn.net/jpg/02/31/83/10/360_F_231831037_Yd0Ryw8MBNZi02UfKpufds0XPUWOEUYc.jpg",
    desc: "Mount Everest , known locally as Sagarmatha in Nepal and Qomolangma in Tibet, is Earth's highest mountain above sea level.",
    map: "https://www.google.com/maps?q=27.988535027325824, 86.92605328124212"
  },
  {
    name: "Offbeat place in Kashmir",
    image: "https://india.destifo.com/wp-content/uploads/sites/5/2023/09/offbeat-places-in-kashmir.jpg",
    desc: "Kashmir, often referred to as “Paradise on Earth,” is a breathtaking region located in the northernmost part of India.",
    map: "https://www.google.com/maps?q=10.057946329579107, 77.06618858393506"
  }

];

let currentIndex = 0;
function loadPlaces(start, count) {
  const container = document.getElementById('placeContainer');
  for (let i = start; i < start + count && i < places.length; i++) {
    const place = places[i];
    const div = document.createElement('div');
    div.className = 'place';
    div.innerHTML = `
      <img src="${place.image}" alt="${place.name}" />
      <h3>${place.name}</h3>
      <p>${place.desc}</p>
      <a href="${place.map}" target="_blank">📍 View on Map</a>
    `;
    container.appendChild(div);
  }
  currentIndex += count;
  if (currentIndex >= places.length) {
    document.getElementById('seeMoreBtn').style.display = 'none';
  }
}

document.getElementById('seeMoreBtn').addEventListener('click', function () {
  loadPlaces(currentIndex, 4);
});

document.getElementById('closeBtn').addEventListener('click', function () {
  document.getElementById('mainContent').style.display = 'none';
  document.getElementById('loginPopup').style.display = 'flex';
});
