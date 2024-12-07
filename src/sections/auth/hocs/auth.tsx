import { useAuth } from '../providers/auth';
import { SignInView } from '../sign-in-view';

export function withAuth(WrappedApp: React.ComponentType) {
  function AppWithAuth() {
    const { isAuth } = useAuth();

    return isAuth ? <WrappedApp /> : <SignInView />;
  }

  const displayName = WrappedApp.displayName || WrappedApp.name || 'AppComponent';
  AppWithAuth.displayName = `withAuth(${displayName})`;

  return AppWithAuth;
}
