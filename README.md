# dokku-deploy

- [dokku-deploy](#dokku-deploy)
  - [Ansible Playbooks](#ansible-playbooks)
    - [Set passwordless sudo for `admin` group](#set-passwordless-sudo-for-admin-group)
    - [Yum update and Reboot](#yum-update-and-reboot)

## Ansible Playbooks

### Set passwordless sudo for `admin` group

```bash
ansible-playbook ansible/playbooks/set-sudoer.yml -b -K
```

### Yum update and Reboot

```bash
ansible-playbook ansible/playbooks/yum-update-reboot.yml
```
