// Mock data for people from different countries and cultures
export const peopleData = [
  {
    id: 1,
    name: "Yuki Tanaka",
    age: 28,
    culture: "Japanese",
    location: {
      city: "Tokyo",
      country: "Japan",
      zipCode: "100-0001"
    },
    languages: ["Japanese", "English", "Korean"],
    interests: ["Anime", "Sushi Making", "Martial Arts", "Technology"],
    bio: "Passionate about sharing Japanese culture and learning about others. Love connecting with people who appreciate traditional arts and modern innovation.",
    distance: 2.3,
    avatar: `${import.meta.env.BASE_URL}images/yuki.jpg`
  },
  {
    id: 2,
    name: "Maria Rodriguez",
    age: 32,
    culture: "Mexican",
    location: {
      city: "Mexico City",
      country: "Mexico",
      zipCode: "06000"
    },
    languages: ["Spanish", "English", "French"],
    interests: ["Cooking", "Dancing", "Art", "Photography"],
    bio: "Chef and cultural ambassador. I love sharing authentic Mexican recipes and learning about different cuisines from around the world.",
    distance: 5.7,
    avatar: `${import.meta.env.BASE_URL}images/maria.jpg`
  },
  {
    id: 3,
    name: "Ahmed Hassan",
    age: 35,
    culture: "Egyptian",
    location: {
      city: "Cairo",
      country: "Egypt",
      zipCode: "11511"
    },
    languages: ["Arabic", "English", "French"],
    interests: ["History", "Calligraphy", "Music", "Architecture"],
    bio: "Historian and calligraphy artist. Fascinated by ancient civilizations and love sharing the rich history of Egypt with others.",
    distance: 8.2,
    avatar: `${import.meta.env.BASE_URL}images/ahmed.jpg`
  },
  {
    id: 4,
    name: "Priya Patel",
    age: 26,
    culture: "Indian",
    location: {
      city: "Mumbai",
      country: "India",
      zipCode: "400001"
    },
    languages: ["Hindi", "English", "Gujarati", "Sanskrit"],
    interests: ["Yoga", "Meditation", "Classical Dance", "Spirituality"],
    bio: "Yoga instructor and spiritual seeker. Passionate about sharing ancient wisdom and helping others find inner peace.",
    distance: 12.1,
    avatar: `${import.meta.env.BASE_URL}images/priya.jpg`
  },
  {
    id: 5,
    name: "Lars Andersen",
    age: 30,
    culture: "Danish",
    location: {
      city: "Copenhagen",
      country: "Denmark",
      zipCode: "1050"
    },
    languages: ["Danish", "English", "German", "Swedish"],
    interests: ["Design", "Sustainability", "Cycling", "Nordic Culture"],
    bio: "Designer and environmental activist. Love the Danish concept of 'hygge' and enjoy sharing Nordic lifestyle with others.",
    distance: 15.8,
    avatar: `${import.meta.env.BASE_URL}images/lars.jpg`
  },
  {
    id: 6,
    name: "Aisha Okafor",
    age: 29,
    culture: "Nigerian",
    location: {
      city: "Lagos",
      country: "Nigeria",
      zipCode: "100001"
    },
    languages: ["English", "Yoruba", "French"],
    interests: ["Fashion", "Music", "Literature", "Entrepreneurship"],
    bio: "Fashion designer and entrepreneur. Proud of my Nigerian heritage and love connecting with creative minds worldwide.",
    distance: 18.5,
    avatar: `${import.meta.env.BASE_URL}images/aisha.jpg`
  },
  {
    id: 7,
    name: "Chen Wei",
    age: 31,
    culture: "Chinese",
    location: {
      city: "Beijing",
      country: "China",
      zipCode: "100000"
    },
    languages: ["Mandarin", "English", "Japanese"],
    interests: ["Calligraphy", "Tea Ceremony", "Martial Arts", "Philosophy"],
    bio: "Traditional Chinese medicine practitioner and calligraphy master. Passionate about sharing ancient Chinese wisdom and healing arts.",
    distance: 22.3,
    avatar: `${import.meta.env.BASE_URL}images/chen.jpg`
  },
  {
    id: 8,
    name: "Isabella Silva",
    age: 27,
    culture: "Brazilian",
    location: {
      city: "São Paulo",
      country: "Brazil",
      zipCode: "01310-100"
    },
    languages: ["Portuguese", "English", "Spanish"],
    interests: ["Samba", "Capoeira", "Nature", "Carnival"],
    bio: "Dancer and environmentalist. Love the vibrant Brazilian culture and enjoy sharing our passion for music, dance, and nature.",
    distance: 25.7,
    avatar: `${import.meta.env.BASE_URL}images/isabella.jpg`
  },
  {
    id: 9,
    name: "Loredana Cannata",
    age: 33,
    culture: "Italian",
    location: {
      city: "Palermo",
      country: "Italy",
      zipCode: "95968"
    },
    languages: ["Italian", "English"],
    interests: ["Fashion", "Art", "Movies", "Dancing"],
    bio: "Italian actress and model. Love sharing Italian culture and fashion with others.",
    distance: 28.9,
    avatar: `${import.meta.env.BASE_URL}images/loredana.jpg`
  },
  {
    id: 10,
    name: "Sophie Dubois",
    age: 24,
    culture: "French",
    location: {
      city: "Paris",
      country: "France",
      zipCode: "75001"
    },
    languages: ["French", "English", "Italian", "Spanish"],
    interests: ["Art", "Literature", "Wine", "Fashion"],
    bio: "Art curator and wine enthusiast. Passionate about French culture, art, and cuisine. Love connecting with fellow art lovers.",
    distance: 31.2,
    avatar: `${import.meta.env.BASE_URL}images/sophie.jpg`
  },
  {
    id: 11,
    name: "Kwame Asante",
    age: 36,
    culture: "Ghanaian",
    location: {
      city: "Accra",
      country: "Ghana",
      zipCode: "GA-001"
    },
    languages: ["English", "Twi", "French"],
    interests: ["Drumming", "Traditional Music", "Community", "Education"],
    bio: "Music teacher and community leader. Proud of our rich musical traditions and love sharing the rhythm of Ghana with the world.",
    distance: 35.6,
    avatar: `${import.meta.env.BASE_URL}images/kwame.jpg`
  },
  {
    id: 12,
    name: "Elena Petrov",
    age: 29,
    culture: "Russian",
    location: {
      city: "Moscow",
      country: "Russia",
      zipCode: "101000"
    },
    languages: ["Russian", "English", "German"],
    interests: ["Literature", "Classical Music", "Ballet", "Chess"],
    bio: "Literature professor and chess master. Fascinated by Russian literature and classical arts. Love intellectual conversations.",
    distance: 38.4,
    avatar: `${import.meta.env.BASE_URL}images/elena.jpg`
  },
  {
    id: 13,
    name: "Ilaria D'amico",
    age: 34,
    culture: "Italian",
    location: {
      city: "Torino",
      country: "Italy",
      zipCode: "11564"
    },
    languages: ["Italian", "English", "Spanish"],
    interests: ["Fashion", "Art", "Soccer", "Poetry"],
    bio: "TV presenter and fashion enthusiast. Love sharing Italian culture and fashion with others.",
    distance: 42.1,
    avatar: `${import.meta.env.BASE_URL}images/ilaria.jpg`
  },
  {
    id: 14,
    name: "Kim Min-jun",
    age: 25,
    culture: "Korean",
    location: {
      city: "Seoul",
      country: "South Korea",
      zipCode: "04524"
    },
    languages: ["Korean", "English", "Japanese"],
    interests: ["K-Pop", "Technology", "Gaming", "Korean Cuisine"],
    bio: "Software developer and K-culture enthusiast. Love sharing Korean pop culture and technology innovations with others.",
    distance: 45.8,
    avatar: `${import.meta.env.BASE_URL}images/kim.jpg`
  },
  {
    id: 15,
    name: "Fatima Zahra",
    age: 30,
    culture: "Moroccan",
    location: {
      city: "Marrakech",
      country: "Morocco",
      zipCode: "40000"
    },
    languages: ["Arabic", "French", "English", "Berber"],
    interests: ["Henna Art", "Traditional Crafts", "Cooking", "Sufi Music"],
    bio: "Artisan and cultural guide. Passionate about Moroccan crafts and traditions. Love sharing the magic of Marrakech with visitors.",
    distance: 48.7,
    avatar: `${import.meta.env.BASE_URL}images/fatima.jpg`
  },
  {
    id: 16,
    name: "Eduardo Feo",
    age: 28,
    culture: "Venezuelan-American",
    location: {
      city: "Miami",
      country: "United States",
      zipCode: "33101"
    },
    languages: ["Spanish", "English", "Portuguese", "Italian"],
    interests: ["Technology", "Entrepreneurship", "Soccer", "Latin Music"],
    bio: "Tech entrepreneur and cultural bridge-builder. Proud of my Venezuelan heritage while embracing the vibrant diversity of Miami. Love connecting people through technology and culture.",
    distance: 0.5,
    avatar: `${import.meta.env.BASE_URL}images/eduardo.jpg`
  },
  {
    id: 17,
    name: "Marina Feo",
    age: 10,
    culture: "Venezuelan-American",
    location: {
      city: "Miami",
      country: "United States",
      zipCode: "33101"
    },
    languages: ["English", "Italian"],
    interests: ["Art", "Music", "Dancing", "Reading"],
    bio: "Young artist and language enthusiast. Love expressing myself through art and music. Excited to learn about different cultures and make new friends from around the world.",
    distance: 0.3,
    avatar: `${import.meta.env.BASE_URL}images/marina.jpg`
  },
  {
    id: 18,
    name: "Jeff Guerrero",
    age: 32,
    culture: "American",
    location: {
      city: "Chicago",
      country: "United States",
      zipCode: "60601"
    },
    languages: ["English"],
    interests: ["Design", "Illustration", "Music", "Asian Food"],
    bio: "UX Designer in Firefox Mobile Team. Passionate about creating intuitive user experiences and exploring design innovations. Love illustration, music, and discovering new Asian cuisine.",
    distance: 8.5,
    avatar: `${import.meta.env.BASE_URL}images/jeff.jpg`
  },
  {
    id: 19,
    name: "Aarjav Pandya",
    age: 29,
    culture: "Indian-Canadian",
    location: {
      city: "Toronto",
      country: "Canada",
      zipCode: "M5H 2N2"
    },
    languages: ["English", "French", "Hindi"],
    interests: ["Music", "Technology", "Outdoor"],
    bio: "UX Designer inside Firefox Mobile UX Team in Mozilla specialized in Android Design. Passionate about creating seamless mobile experiences and exploring the intersection of design and technology.",
    distance: 12.2,
    avatar: `${import.meta.env.BASE_URL}images/aarjav.jpg`
  }
]
