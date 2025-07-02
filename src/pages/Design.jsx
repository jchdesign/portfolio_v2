import design_data from '../data/design_data';

import Directory from '../components/Directory';

function Design() {
  return (
    <main class='design'>
        <Directory 
            heading={'PRODUCT DESIGN'} 
            description={"Embracing the pixels, the nth font iteration, the nice-to-have's, the npx create-react-app's, and the people that make it worthwhile."}
            data={design_data}
        />
    </main>
  )
}

export default Design