import { CreateContact } from 'components/ContactBook/CreateContact';
import { SearchContact } from 'components/ContactBook/SearchContact';
import { MotionAnimationContacts } from 'components/MotionAnimation/MotionAnimationContacts';
export const ContactBook = () => {
  return (
    <>
      <div className="contactBook">
        <MotionAnimationContacts>
          <CreateContact />
        </MotionAnimationContacts>
        <MotionAnimationContacts>
          <SearchContact />
        </MotionAnimationContacts>
      </div>
    </>
  );
};
