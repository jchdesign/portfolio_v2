import ProgramSubItem from './ProgramSubItem';
import TitleUL from './TitleUL';

function ProgramList() {
  return (
    <section className='container'>
        <TitleUL text="TONIGHT'S PROGRAM" size='text font-600' style={{marginBottom: '1em'}}/>
        <ProgramSubItem
          listing='SUITE I: STORIES OF TECHNOLOGY' credit='CHANG' link='#suite-1'
          caption='Featuring performances by MathWorks, Kardder, and UCLA CVL'
          />
        <ProgramSubItem
          listing='SUITE II: STORIES OF MOTION PICTURE' credit='CHANG' link='#suite-2'
          caption='Featuring performances by CAP Studios'
          />
        <ProgramSubItem
          listing='SUITE III: STORIES OF MUSIC' credit='CHANG' link='#suite-3'
          caption='Featuring performances by Recollections'
          />
        <ProgramSubItem
          listing='SUITE IV: STORIES OF ME' credit='CHANG' link='#suite-4'/>
    </section>
  )
}

export default ProgramList