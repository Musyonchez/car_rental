// AuthComponent.js
import { SessionProvider, useSession, signIn, signOut } from "next-auth/react";

export function AuthComponent() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className=" flex flex-row space-x-3">
        <button className=" border-slate-950 px-3 rounded-lg bg-orange-500 text-white" onClick={() => signOut()}>Sign out</button>
        {session.user.image && (
          <img src={session.user.image} alt="Profile" className=" h-9 rounded-full" />
        )}
      </div>
    );
  }

  return (
    <div>
      <button className=" border-slate-950 px-3 rounded-lg bg-orange-500 text-white" onClick={() => signIn('google')}>Sign in</button>
    </div>
  );
}

export function WrappedAuthComponent() {
  return (
    <SessionProvider>
      <AuthComponent />
    </SessionProvider>
  );
}
