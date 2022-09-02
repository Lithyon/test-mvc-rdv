export default interface AuthentificationJahiaDAO {
    finalisationConnexion(mfsid: string): Promise<void>;
}
