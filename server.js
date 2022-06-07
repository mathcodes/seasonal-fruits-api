const express = require('express')
const app = express() 
const cors = require('cors')
const PORT = 8000

app.use(cors())

const Seasons = {
  'winter': {
    'f1':'Chestnuts',
    'f2':'Grapefruit',
    'f3':'Lemons',
    'f4':'Oranges',
    'f5':'Tangerines',
    'f6':'Kale',
    'f7':'Leeks',
    'f8':'Radicchio',
    'f9':'Radishes',
    'f10':'Rutabaga',
    'f11':'Turnips',
    'coldN':true,
    'warmN':false,
    'start':'Dec 21'
  },
  'spring': {
    'f1':'Apricots',
    'f2':'Avocado',
    'f3':'Mango',
    'f4':'Pineapple',
    'f5':'Rhubarb',
    'f6':'Strawberries',
    'f7':'Artichoke',
    'f8':'Asparagus',
    'f9':'Carrots',
    'f10':'Celeriac',
    'f11':'Chives',
    'f12':'Collards',
    'f13':'Fava Beans',
    'f14':'Fennel',
    'f15':'Fiddlehead Ferns',
    'f16':'Morels',
    'f17':'Mustard Greens',
    'coldN':true,
    'warmN':true,
    'start':'Mar 20'
},
  'summer': {
    'f1':'Blackberries',
    'f2':'Blueberries',
    'f3':'Nectarines',
    'f4':'Peaches',
    'f5':'Plums',
    'f6':'Raspberries',
    'f7':'Tomatoes',
    'f8':'Watermelon',
    'f9':'Broccoli',
    'f10':'Cucumber',
    'f11':'Green Beans',
    'f12':'Zucchini',
    'coldN':false,
    'warmN':false,
    'start':'June 21'

},
  'fall':
    {
      'f1':'Apples',
      'f2':'Cranberries',
      'f3':'Figs',
      'f4':'Grapes',
      'f5':'Pears',
      'f6':'Pomegranate',
      'f7':'Quince',
      'f8':'Butternut Squash',
      'f9':'Cauliflower',
      'f10':'Garlic',
      'f11':'Ginger',
      'f12':'Mushrooms',
      'f13':'Potatoes',
      'f14':'Pumpkin',
      'f15':'Sweet Potatoes',
      'f16':'Swiss Chard',
      'coldN':true,
      'warmN':true,
      'start':'Sept 22'  
    }
  }
 
app.get('/', (request,response)=>{
  response.sendFile(__dirname + '/index.html')
})

app.get('/api', (request,response)=>{
  response.json(Seasons)
})

app.get('/api/:name', (request, response)=>{
  const seasonName = request.params.name.toLowerCase()
  console.log(seasonName)
  console.log(Seasons)
  console.log(Seasons[seasonName])
  if (Seasons[seasonName] ) {
    response.json(Seasons[seasonName])
  } else{   
    response.json(Seasons['unknown']) 
  }
  response.json(Seasons)
})

app.listen(process.env.PORT || PORT, () =>{
  console.log(`The server is running on http://localhost:${PORT}`)
})
