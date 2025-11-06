import { execSync } from "node:child_process";
const cmds = [
  'mkdir -p public/images public/assets public/legacy/js',
  'rsync -av --delete legacy/img/     public/images/     || true',
  'rsync -av --delete legacy/assets/  public/assets/     || true',
  'rsync -av --delete legacy/js/      public/legacy/js/  || true',
];
for (const c of cmds) { console.log('$', c); execSync(c, { stdio:'inherit', shell:'/bin/zsh' }); }
console.log('✓ Legacy assets synced');
