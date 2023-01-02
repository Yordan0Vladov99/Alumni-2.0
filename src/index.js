'use strict'

const gallery = document.getElementById("gallery")
const groups = document.getElementById("groups")
const inbox = document.getElementById("inbox")
const galleryButton = document.getElementById("galleryButton")
const groupsButton = document.getElementById("groupsButton")
const followButton = document.getElementById("followButton")

const inboxPicture = document.getElementById("inboxGrey")
const indexWarning = document.getElementById("inboxWarning")

const profileIcon = document.getElementById("profileicon")
const userInfo = document.getElementById("userinfo")
let inboxIsOpen = -1

function selectGallery() {
    gallery.style.display = "flex"
    groups.style.display = "none"

    galleryButton.style.display = "none"
    groupsButton.style.display = "block"
}

function selectGroups() {
    gallery.style.display = "none"
    groups.style.display = "flex"
    groups.style.rowGap = "5px"

    galleryButton.style.display = "block"
    groupsButton.style.display = "none"
}

function follow() {
    if (followButton.innerHTML == "Follow") followButton.innerHTML = "Unfollow"
    else followButton.innerHTML = "Follow"
}

function toggleInbox() {
    inboxIsOpen *= -1
    if (inboxIsOpen == 1) {
        groupsButton.style.display = "none"
        galleryButton.style.display = "none"
        gallery.style.display = "none"
        groups.style.display = "none"
        inbox.style.display = "block"

        inboxPicture.style.display = "block"
        inboxWarning.style.display = "block"

        profileIcon.style.display = "none"
        userInfo.style.display = "none"


    }
    else {
        groupsButton.style.display = "block"
        gallery.style.display = "flex"
        inbox.style.display = "none"

        inboxPicture.style.display = "none"
        inboxWarning.style.display = "none"

        profileIcon.style.display = "block"
        userInfo.style.display = "flex"
    }
}