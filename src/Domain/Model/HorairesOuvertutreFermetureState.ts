import Cloneable from "./Clonable";

export default class HorairesOuvertutreFermetureState implements Cloneable<HorairesOuvertutreFermetureState> {
    cdJj: string;
    hrFermMatin: string;
    hrFermSoir: string;
    hrOuvMatin: string;
    hrOuvSoir: string;
    liJj: string;

    constructor(cdJj: string, hrFermMatin: string, hrFermSoir: string, hrOuvMatin: string, hrOuvSoir: string, liJj: string) {
        this.cdJj = cdJj;
        this.hrFermMatin = hrFermMatin;
        this.hrFermSoir = hrFermSoir;
        this.hrOuvMatin = hrOuvMatin;
        this.hrOuvSoir = hrOuvSoir;
        this.liJj = liJj;
    }

    clone(): HorairesOuvertutreFermetureState {
        return new HorairesOuvertutreFermetureState(
            this.cdJj,
            this.hrFermMatin,
            this.hrFermSoir,
            this.hrOuvMatin,
            this.hrOuvSoir,
            this.liJj
        );
    }
}