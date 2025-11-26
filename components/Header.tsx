import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import { Button } from './ui/button'

const Header = () => {
  return (
    <div className='flex justify-between items-center'>
        <div>Logo</div>
        <div>Links</div>
        <div>
            <SignedOut>
              <SignInButton />
              <SignUpButton>
                <Button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
        </div>
    </div>
  )
}

export default Header