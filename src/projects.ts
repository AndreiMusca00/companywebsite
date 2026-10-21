export const studio = {
  email: 'contact@flytechnologyandinnovation.com',
  address: 'Nufărului 83, Oradea 410597, Romania',
  appStore: 'https://apps.apple.com/ro/app/nearplay-offline-games/id6803905519',
}
export const emailLink = (subject = 'Let’s build something thoughtful') => `mailto:${studio.email}?subject=${encodeURIComponent(subject)}`
export const projects = [
  {
    slug: 'nearplay', name: 'NearPlay', category: 'iPHONE · OFFLINE GAMES', status: 'Available on the App Store',
    line: 'Less scrolling. More playing.',
    summary: 'Quick games. Real company. Play with friends nearby, share one iPhone, or take on the computer.',
    description: 'NearPlay brings familiar games into the moments in between. Challenge a friend nearby, pass the same iPhone, or play against the computer. A simple way to turn a little spare time into time well spent.',
    features: [ ['Together, nearby', 'Connect with another iPhone nearby or play together on the same device.'], ['A game for the moment', 'Pick from Tic Tac Toe, Backgammon, Number Rush, Battleship and Connect Four.'], ['Easy to get into', 'Start without creating an account. Play against the computer with multiple difficulty levels.'] ],
    note: 'Some games or features may require a one-time in-app purchase.',
  },
  {
    slug: 'pictarrow', name: 'Pictarrow', category: 'NEXT FROM THE STUDIO', status: 'In development',
    line: 'The next idea, taking shape.',
    summary: 'A new product in the making. Built with the same care, curiosity and attention to the small things.',
    description: 'Pictarrow is the next project in development at Fly Technology & Innovation. It is still taking shape; the details will be shared when the experience is ready to speak for itself.',
    features: [ ['Currently', 'In development.'], ['The focus', 'A considered product, with room to refine the details.'], ['What comes next', 'A closer look at the experience when it is ready.'] ],
    note: 'No release date has been announced.',
  },
]
export type Project = typeof projects[number]
