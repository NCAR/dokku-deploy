# dokku-deploy

- [dokku-deploy](#dokku-deploy)
  - [Ansible Plugins](#ansible-plugins)
  - [Ansible Playbooks Installation](#ansible-playbooks-installation)
  - [Finalize Dokku Setup](#finalize-dokku-setup)

## Ansible Plugins

```bash
ansible-galaxy collection install community.general
ansible-galaxy collection install ansible.posix
ansible-galaxy collection install community.general
```

## Ansible Playbooks Installation

- Set passwordless sudo for `admin` group

  ```bash
  ansible-playbook ansible/playbooks/set-sudoer.yml -b -K
  ```

- Yum update and Reboot

  ```bash
  ansible-playbook ansible/playbooks/yum-update-reboot.yml
  ```

- System wide dependencies, Dokku and its dependencies

  ```bash
  ansible-playbook ansible/playbooks/yum-install.yml
  ```

## Finalize Dokku Setup

```bash
sudo dokku plugin:install-dependencies --core
```

When the installation is complete, you will need to add your public SSH key to allow remote application deployment. All keys should be added under the dokku user account that is used to manage the application. Set at least one SSH key or include multiples each in their own files in the /home/dokku/.ssh/ folder.

```bash
sudo cp .ssh/authorized_keys /home/dokku/.ssh/dokku.pub
sudo chown dokku:dokku /home/dokku/.ssh/dokku.pub
sudo dokku ssh-keys:add dokku /home/dokku/.ssh/dokku.pub
```
